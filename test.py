import pickle
import numpy as np
import tensorflow as tf
import cv2
from tensorflow.keras.layers import GlobalMaxPooling2D
from numpy.linalg import norm
from sklearn.neighbors import NearestNeighbors

feature_list = np.array(pickle.load(open('embeddings.pkl', 'rb')))
filenames = pickle.load(open('filenames.pkl', 'rb'))

model = tf.keras.applications.ResNet50(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
model.trainable = False

model = tf.keras.Sequential([model, GlobalMaxPooling2D()])

pickle.dump(model, open('model.sav', 'wb'))

img = tf.keras.utils.load_img('sample/saree.jpg', target_size=(224, 224))
img_array = tf.keras.utils.img_to_array(img)
expanded_img_array = np.expand_dims(img_array, axis=0)
preprocessed_img = tf.keras.applications.resnet.preprocess_input(expanded_img_array)
result = model.predict(preprocessed_img).flatten()
normalized_result = result / norm(result)

neighbors = NearestNeighbors(n_neighbors=5, algorithm='brute', metric='euclidean')
neighbors.fit(feature_list)

distances, indices = neighbors.kneighbors([normalized_result])

print(indices)
print(distances)

for file in indices[0]:
    temp_img = cv2.imread(filenames[file])
    cv2.imshow('output', cv2.resize(temp_img, (512, 512)))
    cv2.waitKey(0)

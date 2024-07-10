import tensorflow as tf
import numpy as np
import os
from numpy.linalg import norm
from tensorflow.keras.layers import GlobalMaxPooling2D
import pickle
from tqdm import tqdm

model = tf.keras.applications.ResNet50(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
model.trainable = False

model = tf.keras.Sequential([model, GlobalMaxPooling2D()])


def extract_features(image_path, model1):
    img = tf.keras.utils.load_img(image_path, target_size=(224, 224))
    img_array = tf.keras.utils.img_to_array(img)
    expanded_img_array = np.expand_dims(img_array, axis=0)
    preprocessed_img = tf.keras.applications.resnet.preprocess_input(expanded_img_array)
    result = model1.predict(preprocessed_img).flatten()
    normalized_result = result / norm(result)

    return normalized_result


filenames = []
for file in os.listdir('images'):
    filenames.append(os.path.join('images', file))

feature_list = []
for file in tqdm(filenames):
    feature_list.append(extract_features(file, model))

pickle.dump(feature_list, open('embeddings.pkl', 'wb'))
pickle.dump(filenames, open('filenames.pkl', 'wb'))

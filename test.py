import tensorflow as tf
import cv2
import os
import pickle
import numpy as np
from numpy.linalg import norm
from sklearn.metrics.pairwise import euclidean_distances

m = tf.keras.models.load_model('model.keras')

features = pickle.load(open('features.pkl', 'rb'))
filenames = pickle.load(open('filenames.pkl', 'rb'))

# print(np.array(features).shape)


def preprocess_image(image_path):
    img = tf.io.read_file(image_path)
    img = tf.image.decode_image(img, channels=3)
    img = tf.image.resize(img, (224, 224))
    img = tf.expand_dims(img, axis=0)
    img = tf.keras.applications.resnet.preprocess_input(img)

    # print(f'preprocessed_image = {img}')
    # print(f'preprocessed_image shape = {img.shape}')

    return img


def extract_features(image_path, model):
    preprocessed_img = preprocess_image(image_path)
    result = model.predict(preprocessed_img).flatten()
    # print(norm(result))
    normalized_result = result / norm(result)

    return normalized_result


# Function to get recommendations for new images
def get_recommendations_for_new_image(new_img_path, threshold=1.25):
    new_image_features = extract_features(new_img_path, m).reshape(1, -1)
    distances_from_new_image = euclidean_distances(new_image_features, features).flatten()
    # print(distances_from_new_image)
    recommended_indices = np.where(distances_from_new_image < threshold)[0]
    sorted_indices = recommended_indices[np.argsort(distances_from_new_image[recommended_indices])]
    return sorted_indices


image = 'sample/watch.jpg'
new_image_recommendations = get_recommendations_for_new_image(image)
print("Recommended image indices for new image:", len(new_image_recommendations))

for file in new_image_recommendations:
    filename = os.path.join("C:\\Users\\Megha\\PycharmProjects\\fashionRecommenderSystem\\", filenames[file])
    temp_img = cv2.imread(filename)
    cv2.imshow('output', cv2.resize(temp_img, (512, 512)))
    cv2.waitKey(0)

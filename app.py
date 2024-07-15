from flask import Flask, request, jsonify, render_template
import tensorflow as tf
from keras.models import model_from_json, load_model
import pickle
import numpy as np
import os
from numpy.linalg import norm
from sklearn.metrics.pairwise import euclidean_distances

app = Flask(__name__)

# Global variables for model and data
model = None
features = None
filenames = None


# Load the models
def load_model_and_data():
    global model, features, filenames

    # Load the model (assuming it's the same for feature extraction and recommendation)
    model = load_model('resnet50_model.h5')

    # Load features and filenames
    with open('features.pkl', 'rb') as f:
        features = pickle.load(f)
    with open('filenames.pkl', 'rb') as f:
        filenames = pickle.load(f)


def extract_features(image_path):
    # Implement your feature extraction function here
    # Example:
    # features = feature_extraction_function(image_path, feature_extraction_model)
    img = tf.keras.utils.load_img(image_path, target_size=(224, 224))
    img_array = tf.keras.utils.img_to_array(img)
    expanded_img_array = np.expand_dims(img_array, axis=0)
    preprocessed_img = tf.keras.applications.resnet.preprocess_input(expanded_img_array)
    # print(f'preprocessed_img = {preprocessed_img}')
    # print(f'preprocessed_img shape = {preprocessed_img.shape}')
    result = model.predict(preprocessed_img).flatten()
    normalized_result = result / norm(result)

    return normalized_result


def get_recommendations(new_image_path, threshold=1):
    # Implement your recommendation function here
    # Example:
    # indices = get_recommendations_for_new_image(image_path)
    # return indices
    print('1')
    new_image_features = extract_features(new_image_path).reshape(1, -1)
    print('2')
    distances_from_new_image = euclidean_distances(new_image_features, features).flatten()
    # print(distances_from_new_image)
    print('3')
    recommended_indices = np.where(distances_from_new_image < threshold)[0]
    print('4')
    sorted_indices = recommended_indices[np.argsort(distances_from_new_image[recommended_indices])]
    print('5')
    return sorted_indices


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/recommend', methods=['POST'])
def recommend():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        # Save the uploaded file to a temporary directory or process directly
        # Example: file.save('/tmp/uploaded_image.jpg')
        uploaded_image_path = 'uploads/uploaded_image.jpg'  # Adjust path as needed

        # Save file to disk
        file.save(uploaded_image_path)
        
        recommendations_indices = get_recommendations(uploaded_image_path)
        print(f"Number of recommendations = {len(recommendations_indices)}")
        # Map indices to filenames
        recommended_images = []
        for index in recommendations_indices:
            filename = filenames[index]
            filename = filename.split('\\')
            filename = 'C:/Users/Megha/PycharmProjects/fashion/images/' + filename[1]
            recommended_images.append(filename)
        print()
        print()
        print('Recommended images:')
        for image in recommended_images:
            print(image)
        # Optionally, delete the uploaded image after processing
        if os.path.exists(uploaded_image_path):
            os.remove(uploaded_image_path)

        return jsonify({'recommended_images': recommended_images}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    load_model_and_data()
    app.run(debug=True)
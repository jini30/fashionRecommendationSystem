import tensorflow as tf
import pickle
import numpy as np
from numpy.linalg import norm

m = tf.keras.models.load_model('model.keras')


def extract_features(image_path, model):
    img = tf.keras.utils.load_img(image_path, target_size=(224, 224))
    img_array = tf.keras.utils.img_to_array(img)
    expanded_img_array = np.expand_dims(img_array, axis=0)
    preprocessed_img = tf.keras.applications.resnet.preprocess_input(expanded_img_array)
    print(f'preprocessed_img = {preprocessed_img}')
    print(f'preprocessed_img shape = {preprocessed_img.shape}')
    result = model.predict(preprocessed_img).flatten()
    normalized_result = result / norm(result)

    return normalized_result


filenames = []
for file in os.listdir('images'):
    filenames.append(os.path.join('images', file))

pickle.dump(filenames, open('filenames.pkl', 'wb'))

filenames = pickle.load(open('filenames.pkl', 'rb'))

feature_list = []
for file in tqdm(filenames):
    filename = os.path.join(os.path.join('images', file))
    print(filename)
    feature_list.append(extract_features(filename, m))

pickle.dump(feature_list, open('features.pkl', 'wb'))

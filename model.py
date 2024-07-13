import tensorflow as tf

m = tf.keras.applications.ResNet50(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
m.trainable = False

m.save('model.keras')

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use the application default credentials.
cred = credentials.Certificate('croissant-311f9-firebase-adminsdk-ihvho-2f36124dda.json')
default_app = firebase_admin.initialize_app(cred)
db = firestore.client()
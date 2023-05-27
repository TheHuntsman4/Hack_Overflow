import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use the application default credentials.
cred = credentials.Certificate('croissant-311f9-firebase-adminsdk-ihvho-2f36124dda.json')
default_app = firebase_admin.initialize_app(cred)
db = firestore.client()

class CommunityDetails:

    def __init__(self, uid):
        # collection
        collection_ref = db.collection('community')
        docs = collection_ref.get()

        for doc in docs:
            if uid == doc.id:
                ID = uid
                Data = doc.to_dict()
                break

        def _id():
            return ID

        def _name():
            name = Data['Name']
            return name

        def _categories():
            categories = Data['Description']
            return categories

        def _description():
            description = "lemonade community"
            return description

        self.id = _id()
        self.name = _name()
        self.categories = _categories()
        self.description = _description()


class CommunityChannel:
    def __init__(self, uid, channel):
        doc_roles_ref = db.document(f'community/{uid}/channels/channels/{channel}/{channel}')
        roles_privelages = doc_roles_ref.get()

        # chat collection
        chats_ref = db.collection('community').document('com1').collection('channels').document(
            'channels').collection('channel-1').document('channel-1').collection('chat')

        # Retrieve all chats
        chats = chats_ref.get()
        # all the chat ids are stored here
        self.LesText = []

        # all the chats are stored here:
        self.ChatData = dict()

        # add all the chat ids to LesChats and chat logs to the ChatData
        for chat in chats:
            self.LesText.append(chat.id)
            self.ChatData[chat.id] = chat.to_dict()


        # Check for document
        if roles_privelages.exists:
            self.roles = roles_privelages.to_dict()
        else:
            print("Document not found")  # change this into an api response


class ListCommunityChannels:
    def __init__(self, uid):
        doc_roles_ref = db.collection(f'community/{uid}/channels/channels/')
        channels = doc_roles_ref.get()
        print(channels.to_dict())
def CommunityJson(uid):
    com = CommunityDetails(uid)
    return {
        'id': com.id,
        'name': com.name,
        'categories': com.categories,
        'description': com.description
    }

com = CommunityJson('com1')

'''print(com)
channels = CommunityChannel('com1', 'channel-1')
print(channels.roles)
for i in channels.LesText:
    print(channels.ChatData[i])'''

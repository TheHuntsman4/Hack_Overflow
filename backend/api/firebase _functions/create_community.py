from initialize_firebase import db
from community_data import ListUsers


def CreateCommunity(document_id, uid):  # (name of community, admin user_id)
    document_ref = db.collection('community').document(document_id)
    data = {"Description": "the lemonest of societies", "Name": document_id, "categories": ['lemon', ]}

    member_subcollection = document_ref.collection('members')
    member_data = {'admin': [uid, ], 'muted': []}
    subdocument_ref = member_subcollection.document('members')
    subdocument_ref.set(member_data)

    document_ref.set(data)
    if document_ref.id:
        print('Document created successfully.')
    else:
        print('Failed to create document.')


def EditCommunity(document_id, uid, option=None, channel_name=None):
    print('---list roles---')
    userlist = ListUsers(document_id)
    if uid in userlist['admin']:
        print(f'{uid} is authorized')
    else:
        print('unauthorized')
        exit()
    if option == 'add':
        document_ref = db.collection('community').document(document_id)
        channels_subcollection = document_ref.collection('channels')
        # Create a new document within the channels subcollection
        channel_doc_ref = channels_subcollection.document(channel_name)
        channel_doc_ref.set({})

        # Create subcollection chat in channel
        chat_data = {'message-list': []}
        chat_subcollection_ref = channel_doc_ref.collection('chat')
        chat_document_ref = chat_subcollection_ref.document('messages')
        chat_document_ref.set(chat_data)


# CreateCommunity("Lemon society", '123')
EditCommunity('Lemon society', '123', 'add', 'ice')

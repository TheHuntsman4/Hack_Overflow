from .initialize_firebase import db
from .community_data import ListUsers
from google.cloud import firestore


def CreateCommunity(document_id, user_uid, description="the lemonest of societies",
                    categories=['lemon', ]):  # (name of community, admin user_id)
    document_ref = db.collection('community').document(document_id)
    data = {"Description": description, "Name": document_id, "categories": categories}

    member_subcollection = document_ref.collection('members')
    member_data = {'admin': [user_uid, ], 'muted': []}
    subdocument_ref = member_subcollection.document('members')
    subdocument_ref.set(member_data)

    document_ref.set(data)
    if document_ref.id:
        print('Document created successfully.')
    else:
        print('Failed to create document.')


def EditCommunity(document_id, uid, option=None, arg=None):
    print('---list roles---')
    userlist = ListUsers(document_id)
    if uid in userlist['admin']:
        print(f'{uid} is authorized')
    else:
        if option == 'MESSAGE':  # send message (arg) to channel
            document_path = f'community/{document_id}/channels/channel-1/chat/messages'

            # Update append message to messages
            db.document(document_path).update({
                # ` is required around message-list, why? ...idk ask google
                '`message-list`': firestore.ArrayUnion([{'message': arg, 'uid': uid}])
            })
        else:
            print('unauthorized')
            exit()
    if option == 'ADD':  # add channel
        document_ref = db.collection('community').document('channels')

        # Create a new document within the channels subcollection
        channel_doc_ref = document_ref.document(arg)
        channel_doc_ref.set({})

        # Create the chat subcollection within the channel
        chat_subcollection_ref = channel_doc_ref.collection('chat')
        chat_subcollection_ref.set({})

        # Create the messages document within the chat subcollection
        chat_document_ref = chat_subcollection_ref.document('messages')
        chat_data = {'message-list': []}
        chat_document_ref.set(chat_data)


    elif option == 'DELETE':  # delete channel
        # Specify the document path
        document_path = f'community/{document_id}/channels/{arg}'

        # Delete the channel
        db.document(document_path).delete()
    elif option == 'MESSAGE':
        pass
    else:
        print('invalid option')

# CreateCommunity("Lemon society", '123')
def test():
    EditCommunity('Lemon society', '123', 'add', 'Ice')

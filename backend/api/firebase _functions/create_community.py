from initialize_firebase import db


def CreateCommunity(document_id, uid): # (name of community, admin user_id)
    document_ref = db.collection('community').document(document_id)
    data = {"Description": "the lemonest of societies", "Name": document_id, "categories": ['lemon', ]}
    member_subcollection = 'members'

    subcollection_ref = document_ref.collection(member_subcollection)
    member_data = {'admin': [uid, ], 'muted': []}
    subdocument_ref = subcollection_ref.document('members')
    subdocument_ref.set(member_data)

    document_ref.set(data)
    if document_ref.id:
        print('Document created successfully.')
    else:
        print('Failed to create document.')

# CreateCommunity("Lemon society", '123')
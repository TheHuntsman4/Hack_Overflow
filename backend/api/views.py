from rest_framework.response import Response
from rest_framework.decorators import api_view
from baguette.models import User,Business
from.serializers import RegisterSerializer,GetSerializer,GetBuisSerializer,PostBuisSerializer
from rest_framework.exceptions import AuthenticationFailed
import jwt,datetime
@api_view(['GET'])
def getData(request):
    items = User.objects.all()
    serializer = GetSerializer(items,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addItem(request):
    print("yo")
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        print('isvalid')
    else:
        print(serializer.errors)
    return Response(serializer.data)       

@api_view(['POST'])
def login(request):
    print(request.data['email'])
    emaila = request.data['email']
    password = request.data['password']

    user = User.objects.filter(email=emaila).first()
    print(user,"lol")
    if user is None:
        raise AuthenticationFailed("User not Found!")
    
    if not user.check_password(password):
        raise AuthenticationFailed('Incorrect password!')
    
    payload = {
        'id':user.id,
        'exp' :datetime.datetime.utcnow() +datetime.timedelta(minutes=60),
        'iat': datetime.datetime.utcnow()
        }
    
    token = jwt.encode(payload,'bob',algorithm='HS256')
    print(token)
    response = Response()
    response.set_cookie(key='jwt',value=token,httponly=True)
    response.data = {
            'jwt':token
    }
    return response

@api_view(['GET'])
def user(request):
    token = request.COOKIES.get('jwt')

    if not token:
        raise AuthenticationFailed("Unauthenticated")
    try:
        payload = jwt.decode(token,'bob',algorithms=['HS256'])
    except jwt.ExpiredSignatureError:
        raise AuthenticationFailed('Unauthenticated')
    print(payload['id'])
    user = User.objects.get(id=payload['id'])
    serializer = RegisterSerializer(user)
    return Response(serializer.data)

@api_view(['GET'])
def getbuis(request):
    items = Business.objects.all()
    serializer = GetBuisSerializer(items,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def postbuis(request):
    buisid = request.data['buisid']
    try:
        business = Business.objects.get(buisid=buisid)
        serializer = PostBuisSerializer(business, data=request.data)
        if serializer.is_valid():
            serializer.save()
            print('isvalid')
        else:
            print(serializer.errors)
        return Response(serializer.data)      
    except:
        serializer = PostBuisSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print('Object created')
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
@api_view(['POST'])
def updatebuis(request):
    buisid = request.data['buisid']
    business = Business.objects.get(buisid=buisid)
    serializer = PostBuisSerializer(business, data=request.data)
    if serializer.is_valid():
        serializer.save()
        print('isvalid')
    else:
        print(serializer.errors)
    return Response(serializer.data)      

# ---firebase integration--- #
from .firebase_functions.community_data import *
from .firebase_functions.create_community import *


@api_view(['POST'])
def community_data(request):
    uid = request.data['UID']
    print(CommunityJson(uid))
    x = CommunityJson(uid)
    return Response(x)

@api_view(['POST'])
def list_channels(request):
    print(request.data)
    uid = request.data['UID']
    channels = ListCommunityChannels(uid)
    print(channels)
    x = channels
    return Response(x)

@api_view(['POST'])
def user_list(request):
    uid = request.data['UID']
    userlist = ListUsers(uid)
    print(userlist)
    x = userlist
    return Response(x)

@api_view(['POST'])
def query_communities(request):
    search_query = request.data['QUERY']
    results = QueryCommunities(search_query)
    x = results
    print(results)
    return Response(x)

@api_view(['POST'])
def create_community(request):
    channel_id = request.data['UID']
    user_uid = request.data['USER_ID']
    description = request.data['DESCRIPTION']
    categories = request.data['CATEGORIES']
    x = CreateCommunity(channel_id, user_uid, description,categories)
    print(x)
    return Response(x)

@api_view(['POST'])
def edit_community(request):
    channel_id = request.data['UID']
    user_uid = request.data['USER_ID']
    option = request.data['OPTION']  # add, delete, message
    arg = request.data['ARG']  # arg is channel name for option -> delete and message for option -> message
    EditCommunity(channel_id, user_uid, option, arg)
    return Response('completed task')

@api_view(['POST'])
def list_messages(request):
    channel_id = request.data['UID']
    arg = request.data['CHANNEL']
    ListMessages('com1', 'channel-1')
    return Response('completed task')

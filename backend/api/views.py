from rest_framework.response import Response
from rest_framework.decorators import api_view
from baguette.models import User
from.serializers import RegisterSerializer,GetSerializer
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
        payload = jwt.decode(token,'secret',algorithm=['HS256'])
    except jwt.ExpiredSignatureError:
        raise AuthenticationFailed('Unauthenticated')
    user = User.objects.filter(payload['id']).first()
    serializer = RegisterSerializer(user)
    return Response(serializer.data)
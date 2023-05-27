from rest_framework import serializers
from baguette.models import User,Business

class GetSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = '__all__'

    
class RegisterSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = ['username','email','password']

    def create(self,validated_data):
        print("created")
        password = validated_data.pop('password',None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
    
class GetBuisSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Business
        fields = '__all__'

class PostBuisSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Business
        fields = ['buisid','pfp','name','domain','headquarters','websitelink','about','industry','companysize','specialities','projects']


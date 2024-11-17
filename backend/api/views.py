from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
# for endpoints
def main(request):
    return HttpResponse("<h1>WANNA HEAR SOME SERIOUS MUSIC</h1>"
                        "<h3>MR BIHARI KINDLY PICKUP UR CALL</h3>")

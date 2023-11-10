from django.http import HttpResponse

#1ra Vista
def helloworld(request):
    return HttpResponse("hello_world")

def helloworldRed(request):
    return HttpResponse("<p style=""color: red;"">hola mundo</p>")
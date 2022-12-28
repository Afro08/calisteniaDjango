from django.http import HttpResponse ,request
from django.shortcuts import render
from calistenia.models  import Contacto
from django.views import generic

def index(request):
    return render(request, 'index.html')


def exercises(request):
    return render(request,'ejercicios.html')
def contact (request):
    if request.method=='POST':
        #print("post")
        nombre = request.POST['nombreP']
        telefono = request.POST['telefonoP']
        correo = request.POST['correoP']
        tema = request.POST['temaP']
        mensaje = request.POST['mensajeP']

        ins = Contacto(nombre = nombre,telefono = telefono,correo = correo,tema = tema,mensaje =mensaje)
        ins.save()
        return render(request,'contacto.html')
    else:
        return render(request,'contacto.html')
def users(request):
    lista_usuarios = Contacto.objects.all() 
    return render(request,'usuarios.html',{'lista_usuarios': lista_usuarios})
    
class ContactoListView(generic.ListView):
    model=Contacto

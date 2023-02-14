from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from history.models import History,Memory
from rest_framework import generics, status
from history.serializers import MemorySerializer,HistorySerializer
# Create your views here.


@csrf_exempt
def retriveData(request):
    history=History.objects.all()
    serialize=HistorySerializer(history,many=True)
    return JsonResponse(serialize.data,safe=False)


@csrf_exempt
def deleteData(request):
    data=History.objects.all()
    data.delete()
    return JsonResponse([{"operation": " No Data ","result": " No Data "}], safe=False)

@csrf_exempt
def dummy(request):
    try:
        data=JSONParser().parse(request)
        data=data["client"]["result"]
        while data[-1]  in ["+","-","*","/"]:
            data=data[0:-1]
        while data[0]  in ["+","*","/"]:
            data=data[1:]
        x=eval(data)
        history=History(operation=data,result=x)
        history.save()
    except:
        x="Not Defined"
    # print(data)
    return JsonResponse(str(x),safe=False)


@csrf_exempt
def mcHandler(request):
    data=Memory.objects.all()
    data.delete()
    mc=Memory(number="")
    mc.save()
    print("request for object delete")
    return JsonResponse("memory cleared",safe=False)

@csrf_exempt
def msHandler(request):
    try:
        data=JSONParser().parse(request)
        data=data["client"]["result"]
        while data[-1]  in ["+","-","*","/"]:
            data=data[0:-1]
        while data[0]  in ["+","*","/"]:
            data=data[1:]
        x=eval(data)
        d=Memory.objects.all()
        d.delete()
        mc=Memory(number=x)
        mc.save()
    except:
        x="Not Defined"
    return JsonResponse(str(x),safe=False)


@csrf_exempt
def mrHandler(request):
    x=Memory.objects.all()
    serialise=MemorySerializer(x,many=True)
    x=serialise.data[0]["number"]
    return JsonResponse(x,safe=False)

@csrf_exempt
def mAddHandler(request):
    try:
        data=JSONParser().parse(request)
        data=data["client"]["result"]
        while data[-1]  in ["+","-","*","/"]:
            data=data[0:-1]
        while data[0]  in ["+","*","/"]:
            data=data[1:]
        x1=eval(data)
        print("x1",x1)
        memo=Memory.objects.all()
        serialise=MemorySerializer(memo,many=True)
        x=serialise.data[0]["number"]
        memo.delete()
        print("x",x)
        if x=="":
            memory=Memory(number=int(x1)+int(0))
            memory.save()
        else:
            memory=Memory(number=int(x1)+int(x))
            memory.save()
    except:
        memo=Memory.objects.all()
        serialise=MemorySerializer(memo,many=True)
        x=serialise.data[0]["number"]
        memo.delete()
        if x!="":
            memory=Memory(number=int(x)+int(x))
            memory.save()
            print("except is called")
        else:
            pass
    memo=Memory.objects.all()
    serialise=MemorySerializer(memo,many=True)
    x=serialise.data[0]["number"]
    return JsonResponse(str(x),safe=False)


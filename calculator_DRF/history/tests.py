from django.test import TestCase
from .models import History,Memory
# Create your tests here.
class HistoryModelTestCase(TestCase):
    def setUp(self):
        print("Test running for HistoryModel")
        pass
    def test_history(self):
        operations=["1+2","2+3"]
        results=["3","5"]
        for i in range(len(operations)):
            obj=History.objects.create(
                operation= operations[i],
                result= results[i]
            )
            self.assertEquals(operations[i],obj.operation)
        objs=History.objects.all()
        self.assertEqual(objs.count(),2)

class MemoryModelTestCase(TestCase):
    def setUp(self):
        print("Test running for MemoryModel")
        pass
    def test_memory(self):
        numbers=["1","2","3"]
        for i in range(len(numbers)):
            obj=Memory.objects.create(
                number= numbers[i],
            )
            self.assertEquals(numbers[i],obj.number)
        objs=Memory.objects.all()
        self.assertEqual(objs.count(),3)
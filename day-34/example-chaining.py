class foo():
    def __init__(self, kind=None):
        self.kind = kind
    def my_print(self):
        print (self.kind)
        return self
    @property
    def line(self):
        self.kind = 'line'
        return self
    @property
    def bar(self):
        self.kind='bar'
        return self

a = foo()
a.line
a.my_print()
a.bar
a.my_print()

assert a.kind == 'bar'

b = foo()
b.line.my_print().bar.my_print()
assert b.kind == 'bar'

c = foo().line.my_print().bar.my_print()
assert c.kind == 'bar'
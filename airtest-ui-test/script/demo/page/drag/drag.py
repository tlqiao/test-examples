from script.demo.common.util import *

poco = get_poco()


def drag():
    poco("drag-r1").drag_to(poco("drop-r1"))
    poco("drag-r2").drag_to(poco("drop-r2"))
    poco("drag-r3").drag_to(poco("drop-r3"))
    poco("drag-l1").drag_to(poco("drop-l1"))
    poco("drag-l2").drag_to(poco("drop-l2"))
    poco("drag-l3").drag_to(poco("drop-l3"))
    poco("drag-c1").drag_to(poco("drop-c1"))
    poco("drag-c2").drag_to(poco("drop-c2"))
    poco("drag-c3").drag_to(poco("drop-c3"))
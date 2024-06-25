from script.demo.page.drag.drag import *
from script.demo.page.menu.menu import *
from script.demo.common.init import *


def test_should_drag_successfully():
    start_default_app()
    open_drag_with_poco()
    drag()

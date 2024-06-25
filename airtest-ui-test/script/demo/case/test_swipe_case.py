from script.demo.page.swipe.swipe import *
from script.demo.page.menu.menu import *
from script.demo.common.init import *


def test_should_swipe_successfully():
    start_default_app()
    open_swipe_with_poco()
    swipe_left()
    swipe_right()
    swipe_up()
    swipe_down()
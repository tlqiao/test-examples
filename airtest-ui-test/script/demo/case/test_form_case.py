from script.demo.page.forms.forms import *
from script.demo.page.menu.menu import *
from script.demo.common.init import *


def test_should_select_drop_down_list_successfully():
    start_default_app()
    open_forms_with_poco()
    input_field()
    switch_on()
    switch_off()
    switch_on()
    switch_off()
    select_drop_down_list("Appium is awesome")
    active_button()

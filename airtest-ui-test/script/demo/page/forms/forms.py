from airtest.core.api import *
from script.demo.common.util import *

poco = get_poco()


def input_field():
    poco("text-input").set_text("hello world")
    assert_equal(poco("input-text-result").get_text(), "hello world")


def switch_off():
    if poco("switch-text").get_text() == "Click to turn the switch ON":
        poco("switch").click()
        assert_equal(poco("switch-text").get_text(), "Click to turn the switch OFF")


def switch_on():
    if poco("switch-text").get_text() == "Click to turn the switch OFF":
        poco("switch").click()
        assert_equal(poco("switch-text").get_text(), "Click to turn the switch ON")


def select_drop_down_list(list_value):
    poco("icon_container").click()
    poco(text=list_value).click()


def active_button():
    poco("button-Active").click()
    assert_equal(poco("android:id/scrollView").offspring("android:id/message").get_text(), "This button is active")
    poco("android:id/button3").click()
    poco("button-Active").click()
    poco("android:id/button2").click()
    poco("button-Active").click()
    poco("android:id/button1").click()
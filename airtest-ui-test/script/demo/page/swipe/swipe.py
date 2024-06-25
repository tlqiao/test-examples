from airtest.core.api import *
from script.demo.common.util import *

poco = get_poco()

png_list = ['cat.png', 'weichat.png', 'js.png', 'extendable.png', 'compatible.png']
png_path = "/swipe/screenshot/"


def swipe_left():
    swipe(Template(get_page_path() + "/swipe/screenshot/cat.png"), vector=(-0.5, 0))
    swipe(Template(get_page_path() + "/swipe/screenshot/weichat.png"), vector=(-0.5, 0))
    swipe(Template(get_page_path() + "/swipe/screenshot/js.png"), vector=(-0.5, 0))
    poco("Carousel").offspring("android.view.ViewGroup")[1].swipe('left')
    # swipe(Template(get_page_path() + "/swipe/screenshot/play.png", rgb=True), vector=(-0.5, 0))
    swipe(Template(get_page_path() + "/swipe/screenshot/extendable.png"), vector=(-0.5, 0))
    swipe(Template(get_page_path() + "/swipe/screenshot/compatible.png"), vector=(-0.5, 0))


def swipe_right():
    swipe(Template(get_page_path() + "/swipe/screenshot/compatible.png"), vector=(0.5, 0))
    swipe(Template(get_page_path() + "/swipe/screenshot/extendable.png"), vector=(0.5, 0))
    poco("Carousel").offspring("android.view.ViewGroup")[1].swipe('right')


def swipe_up():
    # swipe(Template(get_page_path() + str(get_match_png(png_list, png_path))), vector=(0, -0.5))
    poco("Carousel").offspring("android.view.ViewGroup")[1].swipe('up')


def swipe_down():
    # swipe(Template(get_page_path() + str(get_match_png(png_list, png_path))), vector=(0, 0.5))
    poco("Carousel").offspring("android.view.ViewGroup")[1].swipe('down')


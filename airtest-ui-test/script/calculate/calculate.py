from airtest.core.api import *
import os

init_device("Android")
PKG = "com.google.android.calculator"
path = os.path.abspath(os.path.join(os.path.dirname(__file__), "./"))
install(path + "/package/com.google.android.calculator.apk")
start_app(PKG)
touch(Template(path + "/screenshot/1.png"))
# touch(Template(path + "/screenshot/2.png"))
touch(Template(path + "/screenshot/4.png", threshold=0.6))
touch(Template(path + "/screenshot/5.png", threshold=0.6))
touch(Template(path + "/screenshot/7.png", threshold=0.5))
touch(Template(path + "/screenshot/add.png", threshold=0.5))
touch(Template(path + "/screenshot/multiplication.png"))
touch(Template(path + "/screenshot/subtraction.png"))
touch(Template(path + "/screenshot/equal.png"))
# swipe(Template("slide_start.png"), Template("slide_end.png"))
# assert_exists(Template("success.png"))
# keyevent("BACK")
# home()
# uninstall(PKG)

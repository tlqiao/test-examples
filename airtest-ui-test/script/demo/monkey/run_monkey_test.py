from script.demo.page.login.login import *
from script.demo.page.menu.menu import *
from script.demo.common.init import *


def should_run_monkey_test_in_login_page_successfully():
    start_default_app()
    open_login_page()
    # cmd = "CLASSPATH=/sdcard/monkeyq.jar:/sdcard/framework.jar exec app_process /system/bin com.android.commands.monkey.Monkey -p com.wdiodemoapp --agent robot --running-minutes 2 --throttle  500 -v -v"
    cmd = "pm list packages"
    run_shell(cmd)
should_run_monkey_test_in_login_page_successfully()

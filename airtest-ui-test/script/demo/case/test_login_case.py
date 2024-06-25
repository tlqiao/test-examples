from script.demo.page.login.login import *
from script.demo.page.menu.menu import *
from script.demo.common.init import *


def test_should_sign_up_successfully():
    """
    should sign up successfully
    """
    start_default_app()
    open_login_page()
    sign_up("qiaotl@163.com", "qtl@111222")


def test_should_login_successfully():
    """
       should sign up successfully
    """
    open_login_page()
    login_app("qiaotl@163.com", "qtl@111222")

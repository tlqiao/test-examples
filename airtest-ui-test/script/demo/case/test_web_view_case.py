from script.demo.page.webview.webview import *
from script.demo.page.menu.menu import *
from script.demo.common.init import *
import pytest


@pytest.mark.skip(reason="it will failed")
def test_should_open_web_view_menu_successfully():
    start_default_app()
    open_web_view_with_poco()
    open_api_menu()

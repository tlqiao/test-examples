### This demo use airtest as UI test tool, use pytest as test framework


Please install below package before run script
- install python
- pip install airtest
- pip install pocoui
- pip install pyyaml
- pip install pytest
- pip install pytest-html


#### Run bank script
pytest ./script/bank/case/test_pay_telephone_charge.py

**comment:** 
- as this case is testing pay telephone charge in bank app, so please open your bank app and login in, go to init page before running test


#### Run demo script
pytest ./script/demo/case/test_*.py
**comment:**
- please set your own device name in config file before running it

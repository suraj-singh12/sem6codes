from fileinput import close
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options

username="online"
password="online123"
# , 'online123', 'online123#', 'online#123', 'lpu123', 'lovely@123', 'lovely#123', 'lovely123#', 'block37']
url="https://internet.lpu.in/"

driver = webdriver.Chrome('C:\chromedriver_win32\chromedriver.exe')
chrome_options = Options()
chrome_options.add_experimental_option("detach", True)
driver.get(url)

try:
    elem = WebDriverWait(driver, 30).until(
    EC.presence_of_element_located((By.ID, "agreepolicy")))
finally:
    driver.find_element("name", "username").send_keys(username)
    # for i in range(0, len(password)):
    driver.find_element("name", "password").send_keys(password) 
    driver.find_element("id", "agreepolicy").click()
    driver.find_element("id", "loginbtn").click()
    driver.minimize_window()
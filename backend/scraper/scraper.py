from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.firefox.firefox_profile import FirefoxProfile
from selenium.webdriver.firefox.firefox_binary import FirefoxBinary
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.firefox.options import Options as FirefoxOptions
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time, random
import os


class firefox_news_scraper:
    def __init__(self):
        # commentout for remote
        # binary = FirefoxBinary(r'C:\Users\ychan2\AppData\Local\Mozilla Firefox\firefox.exe')
        options = FirefoxOptions()
        options.headless = True
        profile = webdriver.FirefoxProfile()
        profile.set_preference("browser.download.folderList", 2)
        profile.set_preference("browser.download.manager.showWhenStarting", False)
        profile.set_preference("browser.download.dir", os.getcwd())
        profile.set_preference(
            "browser.helperApps.neverAsk.saveToDisk", ("application/vnd.ms-excel")
        )
        profile.set_preference("general.warnOnAboutConfig", False)
        profile.set_preference("intl.accept_languages",       "zh-HK")
        profile.update_preferences()
        self.driver = webdriver.Firefox(
            firefox_profile=profile, options=options)#, executable_path='./geckodriver'
       # )  # , firefox_binary=binary)
        self.driver.maximize_window()
        self.dyn_var = {}

    def _delay(self, code, t=[0.5, 2]):
        time.sleep(random.uniform(t[0]  , t[1]))
        exec(code)

    def google_search(self, words, n=10):
        def enter_sword():
            self.driver.get("https://www.google.com/")
            time.sleep(random.uniform(2, 4))
            search = self.driver.find_element_by_css_selector(
                'input[title="Google 搜尋"]'
            )
            search.send_keys(words)
            time.sleep(random.uniform(1, 2))
            return self.driver.find_element_by_css_selector('input[value="Google 搜尋"]')

        but_search = enter_sword()
        while not but_search.is_enabled() or not but_search.is_displayed():
            but_search = enter_sword()
        but_search.click()
        try:
            self._delay(
                "self.driver.find_element(By.XPATH, \"//a[@role='menuitem']/span[text()='新聞']\").click()"
            )
        except:
            self._delay(
                "self.driver.find_element(By.XPATH, \"//div[text()='更多']\").click()"
            )
        hover = ActionChains(self.driver)
        hover.send_keys(Keys.ENTER)
        hover.perform()
        self._delay(
            'self.dyn_var["articles"] = self.driver.find_elements_by_css_selector(\'div[class="hI5pFf"]\')',
            [2, 4],
        )
        articles = self.dyn_var["articles"]
        headings = []
        for a in articles:
            headings.append(
                a.find_element_by_css_selector('div[class="JheGif jBgGLd"]').text
            )
        return headings

        # hover = ActionChains(self.driver)
        # hover.move_to_element(self.driver.find_element_by_css_selector('div[value="CCIS"]'))
        # hover.pause(1)
        # hover.move_by_offset(200, 0)
        # hover.pause(1)
        # hover.move_by_offset(0, 120)
        # hover.pause(1)
        # hover.click(self.driver.find_element_by_css_selector('div[value="Account Maintenance"]'))
        # hover.perform()
        # time.sleep(1)

    def close(self):
        self.driver.close()

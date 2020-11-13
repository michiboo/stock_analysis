from scraper import firefox_news_scraper as fox_scraper


class TestScraper:
    def setup(self):
        self.driver = fox_scraper()

    def test_search(self):
        for i in range(2):
            headings = self.driver.google_search("HSBC")
            assert True
        self.driver.close()

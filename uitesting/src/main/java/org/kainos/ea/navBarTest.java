package org.kainos.ea;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

import java.time.Duration;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class navBarTest {
    @Test
    public void testNavLinksWork() throws InterruptedException {


        WebDriver driver = new ChromeDriver();
        driver.get("https://9miwn7w3uh.eu-west-1.awsapprunner.com/");

        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

        navBar navBar = new navBar();
        homepage homepage = new homepage();

        navBar.clickJobsNav(driver);

        Thread.sleep(4000);


        navBar.clickHome(driver);
        homepage.GethomePageTitl(driver);

        navBar.clickAccount(driver);
        Thread.sleep(4000);

        navBar.clickloginNav(driver);

        navBar.clickAccount(driver);
        Thread.sleep(4000);

        navBar.clickregisterNav(driver);

        System.out.println("All Links Working");

        driver.quit();

    }

    }
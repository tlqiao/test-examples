package com.example;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.BeforeClass;
import org.testng.Assert;
import org.testng.annotations.Test;
public class FirstTest {

    @BeforeClass
    public static void setup() {
    }
    @Test
    public void testGetUsers() {
        RestAssured.baseURI = "https://cat-fact.herokuapp.com/";
        // 发起GET请求
        Response response = RestAssured
                .given()
                .log().all()
                .when()
                .get("/facts/")
                .then()
                .log().all()
                .statusCode(200)
                .extract()
                .response();
        // 验证返回的状态码
        Assert.assertEquals(response.getStatusCode(), 200);
//        Assert.assertTrue(response.jsonPath().getList("$").size() > 0, "User list should not be empty");
    }
}

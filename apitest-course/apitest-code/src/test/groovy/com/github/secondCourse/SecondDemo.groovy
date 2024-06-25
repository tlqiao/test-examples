package com.github.secondCourse

import spock.lang.Specification

import static io.restassured.RestAssured.given

class SecondDemo extends Specification {

    def "should get book  by book name successfully"() {
        given: "no given"
        when: "call get user by name api"
        given().baseUri("http://localhost:9090/").log().all()
                .when()
                .pathParam("bookName",bookName)
                .get("api/getBook/{bookName}")
                .then().log().all()
                .assertThat().statusCode(200)
        then: "no then"
        where:
        bookName|placeHolder
        "tom"|""
        "dave"|""
    }
}


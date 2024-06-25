### this demo clone from spring-cloud-example

- open common project,run mvn clean install
- generate "beer-common-0.0.1.BUILD-SNAPSHOT.jar" in target folder

- config producer_java pom.xml

```xml 
<dependency>
			<groupId>com.example</groupId>
			<artifactId>beer-common</artifactId>
			<version>0.0.1.BUILD-SNAPSHOT</version>
			<scope>system</scope>
			config your path<systemPath>/Users/qiaoli/qiaotl/project/contract-test-demo-scc/lib/beer-common-0.0.1.BUILD-SNAPSHOT.jar</systemPath>
</dependency>
```

- open producer_java project,run mvn clean install


- generate "beer-api-producer-java-0.0.1.BUILD-SNAPSHOT-stub.jar" in target folder
in /target/stub folder,you can see what are stub,it includes contracts and mapping files


- open consumer-java project, run mvn test, should all test pass

	
		

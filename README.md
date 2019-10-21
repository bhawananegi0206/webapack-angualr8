# Go serverless with Angular & Webpack

This branch is created for purpose of this article.

To start with clone to the Git repository
git clone https://github.com/bhawananegi0224/webapack-angualr8.git

cd webapack-angualr8
npm install
npm start



To test Sorting pagination cursor search and filter .Please find example URLS

http://localhost:8080/employeerecords?sort=[{"field":"salary","method":"descending"}]
http://localhost:8080/employeerecords?filter=[{"field":"salary","method":"equality","parameters" :40000}]
http://localhost:8080/employeerecords?filter=[{"field":"name","method":"equality","parameters" :"jack"}]
http://localhost:8080/employeerecords?filter=[{"field":"age","method":"equality","parameters" :30}]
http://localhost:8080/employeerecords?search=leslie
http://localhost:8080/employeerecords?search=50
http://localhost:8080/employeerecords?cursor=11
http://localhost:8080/employeerecords?filter=%5B%7B%22field%22:%22salary%22,%22method%22:%22equality%22,%22parameters%22%20:40000%7D%5D&search=%22jack%22

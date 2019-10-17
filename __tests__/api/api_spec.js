const frisby = require('frisby');
const url = "http://localhost:4000"

var expected = false
var data_id

//It will be called before each spec(fdescribe)
beforeEach(async function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;

});

//It will be called before each spec(fdescribe)
afterEach(function() {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
});



it("create data", async () => {
    var create = await frisby.post(`${url}/create`, {
            "name": "River of Smoke",
    		"author": "Amitav ghose"
        },{ json: true })
        .expect('status', 200)

        // .inspectResponse()
        // .inspectRequest()
        .inspectRequestHeaders()
        // .inspectBody()
        // .inspectStatus()
        // .inspectHeaders()
        .then((create) =>{
      		expect(create._json.name).toBe("River of Smoke");
      		data_id = create._json._id;
        })
})

//////////// get all data/////////////

it("get all data", async() =>{
	var getAll = await frisby.get(`${url}/getAllUser`)
	// console.log("@@@@@@@@@@@@",getAll)
	.expect('status', 200)
	.then(function(getAll) {
		if (getAll._json)
        		expected = true
			expect(expected).toBe(true)
	})
})

/////////////// get data by Id ////////

it("get data By Id", async() =>{
	var dataById = await frisby.get(`${url}/getAllUserById/${data_id}`)
	.expect('status', 200)
	// console.log("@@@@@@@@@@@@",dataById)
	.then(function(dataById) {
		if (dataById._json)
        		expected = true
			expect(expected).toBe(true)
	})
})

//////////// delete data by id/////////////

it("update data by id", async() => {
	let res = await frisby.put(`${url}/updateById/${data_id}`,{
		"name": "River of Smoke",
    	"author": "Amitav ghose"
	},{ json:true })
	.expect('status', 200)
	// console.log("@@@@@@@@@@@@",res)
	// .then(function(res) {
	// 	expect(res._json.deptName).toBe("pratik_departments")
	// })
})

//////////// delete data by id/////////////

it("delete department by id", async() => {
	let res = await frisby.del(`${url}/deleteById/${data_id}`,{
		"id": data_id
	},{ json:true })
	.expect('status', 200)
	// console.log("@@@@@@@@@@@@",res)
	// .then(function(res) {
	// 	expect(res._json.deptName).toBe("pratik_departments")
	// })
})
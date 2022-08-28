const data = [{
    id: 123,
    name: "Munich",
    location: 481767,
    chargers: [{
        id: 345,
        type: "HPC",
        serialNumber: "123",
        status: "CONNECTED",
        lastUpdated: "Thu Aug 25 2022",
    }, {
        id: 456,
        type: "T52",
        serialNumber: "234",
        status: "CONNECTED",
        lastUpdated: "Thu Aug 25 2022",
    }],
    postalCode: "80809",
    lastUpdated: "Thu Aug 25 2022",
    country: "DEU"
}]

exports.createOneRequest = (req, res) => {
    res.status(201).json({message: "New location created!"});
}

exports.readAllRequest = (req, res) => {
    res.status(302).json({message: "Locations found!", data});
}

exports.readOneRequest = (req, res) => {
    res.status(302).json({message: "Location found!", data: data[0]});
}

exports.updateOneRequest = (req, res) => {
    res.status(301).json({message: "Location updated!"});
}

exports.deleteOneRequest = (req, res) => {
    res.status(202).json({message: "Location deleted!"});
}
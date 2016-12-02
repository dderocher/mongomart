function foo() {
    //console.log("hello world")


    var myCur =
        db.item.aggregate([

            {
                $group: {
                    _id: "$category",
                    count: {
                        $sum: 1
                    }
                }
            }, {
                $sort: {
                    _id: 1
                }
            }
        ])


    return myCur;
}

/*function foo2() {
    //console.log("hello world")


    var myCur =




        return myCur;
}

function foo3() {
    //console.log("hello world")




    return myCur;
}
*/



/*
db.companies.aggregate( [
    { $match: { "relationships.person": { $ne: null } } },
    { $project: { relationships: 1, _id: 0 } },
    { $unwind: "$relationships" },
    { $group: {
        _id: "$relationships.person",
        count: { $sum: 1 }
    } },
    { $sort: { count: -1 } }
] )






*/

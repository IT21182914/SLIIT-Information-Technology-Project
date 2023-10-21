import express from 'express'
import employeeSchema from '../model/employee.js'
import mongoose from '../db/conn.js'
import { hashPasswordNew } from './adminController.js'
import attendanceSchema from '../model/attendanceSheet.js'
import { now } from 'mongoose'

export const employeeModel = mongoose.model('employee', employeeSchema)

const attendanceModel = mongoose.model('attendance', attendanceSchema)

//admin with employee in   prrivilege can add new employee
function generateID() {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2);
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const date = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const id = `EMP${year}${seconds}${date}${month}${hours}${minutes}`;
    return id;
}

// Example usage
const id = generateID();
console.log(id);

export const addNewEmployee = (req, res) => {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("HR")) {
                const { name, phone, gender, nic, salary, isMonthly, image } = req.body
                console.log([name, phone, gender, nic, salary, isMonthly])
                let employee = new employeeModel()
                const empId = generateID()
                employee.empId = empId
                employee.email = empId + "@samod.lk"
                employee.name = name
                employee.phone = phone
                employee.gender = gender
                employee.nic = nic
                employee.image = image
                employee.password = hashPasswordNew(nic)
                employee.salary = salary
                employee.isMonthly = isMonthly
                employee.save().then((response) => {
                    res.send(response)
                }
                ).catch((err) => {
                    console.log(err)
                }
                )

            } else {
                res.send({
                    privilegeError: true
                })
            }
        } else {
            res.send({
                accountTypeError: true
            })
        }
    }
}
//login as employee
export const loginAsEmployee = (req, res) => {
    const { email, password } = req.body
    employeeModel.findOne({ email: email }).then((model) => {
        if (model != null) {
            if (model.password == hashPasswordNew(password)) {
                req.session.userid = model._id
                res.send({
                    loginSuccess: true,
                    user: model
                })
            } else {
                res.send({
                    passwordError: true
                })
            }
        } else {
            res.send({
                loginSuccess: false
            })
        }
    }
    ).catch((err) => {
        console.log(err)
    }
    )
}


//admin with HR in   prrivilege can update employee
export const updateEmployee = (req, res) => {

    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("HR")) {
                console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")
                const { empId, email, name, phone, gender, nic, address, password, hiredDate, advance, workDays, salary, isMonthly } = req.body
                employeeModel.updateOne({ _id: req.params.id }, {
                    $set: {
                        name: name,
                        phone: phone,
                        gender: gender,
                        nic: nic,
                        advance: advance,
                        password: hashPasswordNew(nic),
                        salary: salary,
                        isMonthly: isMonthly
                    }
                }).then((response) => {
                    res.send(response)
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
    }
}

//update employee advance
export const updateEmployeeAdvance = (req, res) => {
    if (req.logInfo.userLogged) {
        const { advance } = req.body;
        const advanceValue = parseInt(advance, 10);

        // Retrieve the existing advance value from the database
        employeeModel
            .findOne({ _id: req.params.id })
            .then((employee) => {
                const storedAdvanceValue = employee.advance;

                if (storedAdvanceValue > 10000) {
                    console.log('Stored advance value is greater than 10000');
                } else {

                    employeeModel
                        .updateOne(
                            { _id: req.params.id },
                            {
                                $set: {
                                    advance: advanceValue,
                                },
                            }
                        )
                        .then((response) => {
                            res.send(response);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
};




//admin with HR in   prrivilege can delete employee
export const deleteEmployee = (req, res) => {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("HR")) {
                employeeModel.deleteOne({ _id: req.params.id }).then((response) => {
                    res.send(response)
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
    }
}
//admin with HR in   prrivilege can get all employees
export const getAllEmployees = (req, res) => {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("HR")) {
                employeeModel.find().then((response) => {
                    res.send(response)
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
    }
}
//admin with HR in   prrivilege can get employee by id
export const getEmployeeById = (req, res) => {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("HR")) {
                console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
                console.log(req.params.id)
                employeeModel.findOne({ _id: req.params.id }).then((response) => {
                    res.send(response)
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
    }
}
//admin with HR in   prrivilege can get employee by empId
export const getEmployeeByEmpId = (req, res) => {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("HR")) {
                employeeModel.findOne({ empId: req.params.empId }).then((response) => {
                    res.send(response)
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
    }
}

export function getTotalPayDue(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("HR")) {
                employeeModel.find().then((response) => {
                    let total = 0
                    response.forEach((employee) => {
                        if (employee.isMonthly) {
                            total = total + employee.salary
                            //add additional bonus of 10% when work days are more than 20
                            if (employee.workDays > 20) {
                                total = total + (employee.salary * 0.1)
                            }
                            //reduce salary if advance is given
                            if (employee.advance > 0) {
                                total = total - employee.advance
                            }

                        } else {
                            total = total + (employee.salary * employee.workDays)
                            if (employee.advance > 0) {
                                total = total - employee.advance
                            }
                        }
                    })
                    res.send({
                        total: total
                    })
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
    }
}
export function payAll(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("HR")) {
                employeeModel.find().then((response) => {

                    response.forEach((employee) => {
                        if (employee.isMonthly) {

                            let bonus = 0
                            //add additional bonus of 10% when work days are more than 20
                            if (employee.workDays > 20) {
                                bonus = (employee.salary * 0.1)
                            }
                            //reduce salary if advance is given

                            employeeModel.updateOne({ _id: employee._id }, {
                                $set: {
                                    lastMonthAdvance: employee.advance,
                                    advance: 0,
                                    workDays: 0,
                                    lastMonthBonus: bonus,
                                    lastMonthWorkdays: employee.workDays
                                }
                            }).then((response) => {
                                console.log(response)
                            }).catch((err) => {
                                console.log(err)
                            })

                        } else {
                            employeeModel.updateOne({ _id: employee._id }, {
                                $set: {
                                    lastMonthAdvance: employee.advance,
                                    advance: 0,
                                    workDays: 0,
                                    lastMonthBonus: 0,
                                    lastMonthWorkdays: employee.workDays
                                }
                            }).then((response) => {
                                console.log(response)
                            }).catch((err) => {
                                console.log(err)
                            })

                        }
                    })
                    res.send({
                        total: total
                    })
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
    }
}
export function markAttendance(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("HR")) {
                employeeModel.findOne({ _id: req.params.id }).then((response) => {
                    let workDays = response.workDays + 1
                    employeeModel.updateOne({ _id: req.params.id }, {
                        $set: {
                            workDays: workDays
                        }
                    }).then((response) => {
                        //find if  attendaceModel exist for today
                        attendanceModel.findOne({ date: new Date() }).then((response) => {
                            if (response) {
                                //if exist update
                                let present = response.present
                                present.push(req.params.id)
                                attendanceModel.updateOne({ date: new Date() }, {
                                    $set: {
                                        emplist: response.empList.push(req.params.id)
                                    }
                                }).then((response) => {
                                    res.send({
                                        message: "attendance marked"
                                    })
                                }).catch((err) => {
                                    console.log(err)
                                })
                            } else {
                                //if not exist create

                                present.push(req.params.id)
                                let attendance = new attendanceModel({
                                    date: new Date(),
                                    empList: [req.params.id],
                                })
                                attendance.save().then((response) => {
                                    res.send({
                                        message: "attendance marked"
                                    })
                                }).catch((err) => {
                                    console.log(err)
                                })
                            }
                        }).catch((err) => {
                            console.log(err)
                        })


                    }).catch((err) => {
                        console.log(err)
                    })
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
    }
}
//get attendaceModel's today empList length / total employeeModel data count as a percentage
export function getAttendancePercentage(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("HR")) {
                attendanceModel.findOne({ date: new Date() }).then((response) => {
                    employeeModel.find().then((response2) => {
                        let percentage = (response.empList.length / response2.length) * 100
                        res.send({
                            percentage: percentage
                        })
                    }).catch((err) => {
                        console.log(err)
                    })
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
    }
}

//get all users count
export function getUsersCount(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            if (req.logInfo.userObject.privileges.includes("HR")) {
                employeeModel.find().then((response) => {
                    res.send({
                        count: response.length
                    })
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
    }
}

//group attendance by dates
export function getAttendanceByDate(req, res) {
    if (req.logInfo.userLogged && req.logInfo.userType === "admin") {
        attendanceModel.aggregate([
            {
                $group: {
                    _id: "$date",
                    count: { $sum: 1 }
                }
            }
        ]).then((response) => {
            res.send({
                attendance: response
            });
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ error: "An error occurred while fetching the data." });
        });
    }
}

//admin with HR in prrivilege mark attendance for employees
export function markAttendanceByDate(req, res) {
    if (req.logInfo.userLogged) {
        if (req.logInfo.userType == "admin") {
            console.log("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF")
            console.log(req.params.id)

            const date = new Date(); //get current date

            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const newDate = year + "-" + month + "-" + day

            //create attendanceModel for the date
            let attendance = new attendanceModel({
                date: newDate,
                empId: req.params.id,
            })
            attendance.save().then((response) => {
                res.send({
                    message: "attendance marked"
                })
            }
            ).catch((err) => {
                console.log(err)
            }
            )

        }
    }
}












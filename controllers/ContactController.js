import Contact from "../models/contacts.js"

class ContactController {
  async create(req, res) {
    try {
      const {name,surName,number,authorId,city,gender,age,_id} = req.body;
      const contact = await Contact.create({name,surName,number,authorId,city,gender,age,_id});
      console.log('contact=', contact);
      return res.status(200).json(contact);
    } catch (e) {
      res.status(400).json({message: "contact create error"});
    }
  }
  async edit (req,res) {
    try {
      const contact = req.body
      if (!contact._id){
        res.status(400).json({message: 'Id не указан'})
      }
      const updatedContact = await Contact.findByIdAndUpdate(contact._id,contact,{new:true})
      return res.status(200).json(updatedContact)
    } catch (e){
      res.status(500).json(e)
    }
  }
  async getContacts (req,res) {
    try{
      const { authorid } = req.headers;
      const contacts = await Contact.find()
      const currentAuthorContacts = contacts.filter((item) => item.authorId===authorid)
      return res.status(200).json(currentAuthorContacts)
    } catch(e) {
      res.status(500).json(e);
    }
  }
  async deleteContact (req,res) {
    try{
      const { _id } = req.body
      console.log('_id=',_id);
      const delContact = await Contact.deleteOne({ _id })
      console.log('delContact=',delContact);
      return res.status(200).json(_id)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new ContactController();
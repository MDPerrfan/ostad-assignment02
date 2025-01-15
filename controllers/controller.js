import jwt from 'jsonwebtoken'
export const helloWorld = (req, res) => {
    res.send('Hello World');
};

export const postBodyResponse = (req, res) => {
    res.send('I am post body');
};

export const generateToken = (req, res) => {
    const token = jwt.sign({ id: '12345' }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};
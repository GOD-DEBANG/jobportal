import bcrypt from 'bcrypt';
export const registerUser = async (req, res) => { //REGISTER FUNCTION
    try {
         const { fullname, email, password } = req.body;

        // Validate input
        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }
        // Check if user already exists
        const existingUser = await User.findOne({
            email: email.toLowerCase()
        });
        if (existingUser) {

            return res.status(400).json({ message: "User already exists", success: false });
        }
        // Create new user
        const hasedpassword = await bcrypt.hash(password, 10);{
            password: hasedpassword
        }
        const newUser = new User({
            fullname,
            email: email.toLowerCase(),
            password: hasedpassword,
            role: "user" // Default role
        });
        await newUser.save();
        return res.status(201).json({ message: "User registered successfully", success: true });
    }
    catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
}
export const loginUser = async (req, res) => { //LOGIN FUNCTION
     try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required", success: false });
        }

        // Find user by email
        const user = await user.findOne({ email: email.toLowerCase() });
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials", success: false });
        }

        // Return user data (excluding password)
        const { password: _, ...userData } = user.toObject();
        return res.status(200).json({ message: "Login successful", success: true, user: userData });
    }
    catch (error) {
        console.error("Error logging in user:", error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
    //check role is correct or not
    if(role !== "user" && role !== "admin"){
        return res.status(403).json({ message: "Access denied", success: false });
    }
    else{
        return res.status(200).json({ message: "Access granted", success: true });
    }
    //generate token
    const tokendata = {
        id: user._id,
        email: user.email,
        role: user.role
    }
    const token = await jwt.sign(tokendata, process.env.SECRET_KEY, { expiresIn: "1d" });
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Use secure cookies in production
        sameSite: "strict"
    });
    return res.status(200).json({ message: "Login successful", success: true, user: userData, token });
}
export const logoutUser = async (req, res) => {  //LOG-OUT FUNCTION
    try {
        res.clearCookie("token");
        return res.status(200).json({ message: "Logout successful", success: true });
    } catch (error) {
        console.error("Error logging out user:", error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
}
export const updateprofile = async (req, res) => { //UPDATE PROFILE FUNCTION
    try {
        const { userId } = req.params;
        const { bio, profilePicture, coverPicture, experience, education, skills } = req.body;

        // Validate input
        if (!userId || !bio || !profilePicture || !coverPicture) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        // Find user and update profile
        const user = await user.findByIdAndUpdate(
            userId,
            {
                $set: {
                    "profile.bio": bio,
                    "profile.profilePicture": profilePicture,
                    "profile.coverPicture": coverPicture,
                    "profile.experience": experience,
                    "profile.education": education,
                    "profile.skills": skills
                }
            },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }

        return res.status(200).json({ message: "Profile updated successfully", success: true, user });
    } catch (error) {
        console.error("Error updating profile:", error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
}
export const getUserProfile = async (req, res) => { //GET USER PROFILE FUNCTION
    try {
        const { userId } = req.params;

        // Validate input
        if (!userId) {
            return res.status(400).json({ message: "User ID is required", success: false });
        }

        // Find user and populate profile data
        const user = await user.findById(userId).populate("profile.company");

        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }

        return res.status(200).json({ message: "User profile retrieved successfully", success: true, user });
    } catch (error) {
        console.error("Error retrieving user profile:", error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
}
export const register = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.staus(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.staus(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

export const getUserData = async(req,res)=>{
        try {
            
        } catch (error) {
            console.log(error);
            res.staus(500).json({
                success:false,
                error:true,
                message:error.message
            })
        }
    
};

export const updateProfile = async(req,res)=>{
    try {
            
    } catch (error) {
        console.log(error);
        res.staus(500).json({
            success:false,
            error:true,
            message:error.message
        })
    }
}
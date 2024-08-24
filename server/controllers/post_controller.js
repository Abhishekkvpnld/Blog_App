export const addNewPost = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

export const deletePost = async (req, res) => {
    try {
    } catch (error) {
      res.status(500).json({
        success: false,
        error: true,
        message: error.message,
      });
    }
};

export const likePost = async (req, res) => {};

export const commentPost = async (req, res) => {};

export const searchPost = async (req, res) => {};

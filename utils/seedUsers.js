const User = require('../models/User');

const seedUsers = async () => {
  try {
    // Check if users already exist
    const existingUsers = await User.countDocuments();
    if (existingUsers > 0) {
      console.log('✅ Users already seeded');
      return;
    }

    // Create default users
    const users = [
      {
        username: 'admin',
        email: 'admin@hotel.com',
        password: 'Admin123!',
        role: 'admin',
      },
      {
        username: 'testuser',
        email: 'user@hotel.com',
        password: 'User123!',
        role: 'user',
      },
    ];

    await User.insertMany(users);

    console.log('✅ Default users created:');
    console.log('   Admin: admin@hotel.com / Admin123!');
    console.log('   User: user@hotel.com / User123!');
  } catch (error) {
    console.error('❌ Error seeding users:', error.message);
  }
};

module.exports = seedUsers;

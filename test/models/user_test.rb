require 'test_helper'

class UserTest < ActiveSupport::TestCase
  setup do
    @user_properties = {
      name: 'Test',
      birthdate: '1974-01-01',
      phone: '123-4567-8901',
      job: 'Tester'
    }
  end

  test 'requires a name' do
    user = User.new(@user_properties.except(:name))
    refute user.valid?
    assert_not_nil user.errors[:name]
  end

  test 'requires a birthdate' do
    user = User.new(@user_properties.except(:birthdate))
    refute user.valid?
    assert_not_nil user.errors[:birthdate]
  end

  test 'requires a phone' do
    user = User.new(@user_properties.except(:phone))
    refute user.valid?
    assert_not_nil user.errors[:phone]
  end

  test 'requires a job' do
    user = User.new(@user_properties.except(:job))
    refute user.valid?
    assert_not_nil user.errors[:job]
  end
end

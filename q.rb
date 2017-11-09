class Fixnum
  def q
    0.step{|i|
      return i - 1 if self >> i == 0
    }
  end
end

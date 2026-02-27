import { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from './dialog';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string, firstName: string, lastName: string, phone: string, amount: number) => void;
  isLoading: boolean;
  courseName: string;
}

export function EmailModal({
  isOpen,
  onClose,
  onSubmit,
  isLoading,
  courseName
}: EmailModalProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [emailError, setEmailError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [amountError, setAmountError] = useState('');

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let hasError = false;

    if (!firstName.trim()) {
      setFirstNameError('Please enter your first name');
      hasError = true;
    } else {
      setFirstNameError('');
    }

    if (!lastName.trim()) {
      setLastNameError('Please enter your last name');
      hasError = true;
    } else {
      setLastNameError('');
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      hasError = true;
    } else {
      setEmailError('');
    }

    if (!phone.trim()) {
      setPhoneError('Please enter your phone number');
      hasError = true;
    } else {
      setPhoneError('');
    }

    const parsedAmount = parseFloat(amount);
    if (!amount || isNaN(parsedAmount) || parsedAmount < 100) {
      setAmountError('Minimum amount is $100');
      hasError = true;
    } else {
      setAmountError('');
    }

    if (hasError) return;

    onSubmit(email, firstName, lastName, phone, parsedAmount);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-[#1a2332] border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Complete Your Purchase
          </DialogTitle>
          <DialogDescription className="text-white/60">
            Enter your details to proceed with purchasing {courseName}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            {/* First & Last Name side by side */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="firstName" className="text-sm font-medium text-white/80">
                  First Name *
                </label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => { setFirstName(e.target.value); setFirstNameError(''); }}
                  className="mt-1 bg-[#0f1a2e] border-white/10 text-white"
                  required
                />
                {firstNameError && (
                  <p className="text-red-400 text-xs mt-1">{firstNameError}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="text-sm font-medium text-white/80">
                  Last Name *
                </label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => { setLastName(e.target.value); setLastNameError(''); }}
                  className="mt-1 bg-[#0f1a2e] border-white/10 text-white"
                  required
                />
                {lastNameError && (
                  <p className="text-red-400 text-xs mt-1">{lastNameError}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-white/80">
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
                className="mt-1 bg-[#0f1a2e] border-white/10 text-white"
                required
              />
              {emailError && (
                <p className="text-red-400 text-sm mt-1">{emailError}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="text-sm font-medium text-white/80">
                Phone Number *
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 555 000 0000"
                value={phone}
                onChange={(e) => { setPhone(e.target.value); setPhoneError(''); }}
                className="mt-1 bg-[#0f1a2e] border-white/10 text-white"
                required
              />
              {phoneError && (
                <p className="text-red-400 text-sm mt-1">{phoneError}</p>
              )}
            </div>

            <div>
              <label htmlFor="amount" className="text-sm font-medium text-white/80">
                Amount (USD) * <span className="text-white/40 font-normal">— minimum $100</span>
              </label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">$</span>
                <Input
                  id="amount"
                  type="number"
                  min={100}
                  step={1}
                  placeholder="100"
                  value={amount}
                  onChange={(e) => { setAmount(e.target.value); setAmountError(''); }}
                  className="pl-7 bg-[#0f1a2e] border-white/10 text-white"
                  required
                />
              </div>
              {amount && !isNaN(parseFloat(amount)) && parseFloat(amount) > 0 && (
                <p className="text-white/40 text-xs mt-1">
                  ≈ ₾{(parseFloat(amount) * 2.75).toFixed(0)} GEL
                </p>
              )}
              {amountError && (
                <p className="text-red-400 text-sm mt-1">{amountError}</p>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isLoading}
              className="border-white/10 text-white hover:bg-white/5"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-[#0033ff] hover:bg-[#0044ff]"
            >
              {isLoading ? 'Processing...' : 'Continue to Payment'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

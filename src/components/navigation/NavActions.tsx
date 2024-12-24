import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Sun, Moon } from 'lucide-react';
import { Button } from '../ui/Button';
import { CTAButton } from '../ui/CTAButton';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/utils/cn';

interface NavActionsProps {
  className?: string;
}

export function NavActions({ className }: NavActionsProps) {
  const { isDark, toggleDark } = useTheme();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleFreeTrial = () => {
    navigate('/free-trial');
  };

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <button 
        onClick={toggleDark}
        className={cn(
          "p-2 rounded-lg",
          "bg-gray-100 dark:bg-gray-800",
          "text-black dark:text-white",
          "hover:bg-gray-200 dark:hover:bg-gray-700",
          "transition-colors"
        )}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>
      
      {!user && (
        <>
          <Button 
            as={Link}
            to="/login"
            variant="secondary"
            className={cn(
              "hidden sm:inline-flex items-center",
              "hover:bg-white/20",
              "transition-all duration-300"
            )}
          >
            <LogIn className="w-4 h-4 mr-2" />
            Login
          </Button>
          
          <CTAButton
            onClick={handleFreeTrial}
            className={cn(
              "hidden sm:inline-flex",
              "hover:scale-105",
              "transition-all duration-300"
            )}
          >
            Start Free Trial
          </CTAButton>
        </>
      )}
    </div>
  );
}
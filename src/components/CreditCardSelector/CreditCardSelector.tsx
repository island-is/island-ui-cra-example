import React from 'react';
import { Box, Button } from '@island.is/ui';

import { CreditCard } from './CreditCard/CreditCard';

type Card = {
  cardType: 'Mastercard' | 'Visa';
  lastFourDigits: string;
  active: boolean;
};
interface CreditCardSelectorProps {
  onAddCard?: () => void;
  availableCards: Card[];
}

export const CreditCardSelector: React.FC<CreditCardSelectorProps> = ({
  onAddCard = () => null,
  availableCards,
}) => (
  <Box position="relative">
    {availableCards.map((card) => (
      <CreditCard
        cardType={card.cardType}
        lastFourDigits={card.lastFourDigits}
        active={card.active}
      />
    ))}
    <Box marginTop={1} marginBottom={4}>
      <Button fluid variant="ghost" onClick={onAddCard}>
        Nota annað kort
      </Button>
    </Box>
  </Box>
);

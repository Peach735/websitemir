import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Eye,
  Gavel,
  Languages,
  Lock,
  Mail,
  MessageSquare,
  Phone,
  PhoneCall,
  Route,
  Send,
  ShieldCheck,
  Wallet,
} from 'lucide-react';

const ICONS = {
  'arrow-right': ArrowRight,
  check: Check,
  'clipboard-check': ClipboardCheck,
  eye: Eye,
  gavel: Gavel,
  languages: Languages,
  lock: Lock,
  mail: Mail,
  'message-square': MessageSquare,
  phone: Phone,
  'phone-call': PhoneCall,
  route: Route,
  send: Send,
  'shield-check': ShieldCheck,
  wallet: Wallet,
};

export default function Icon({ name, ...props }) {
  const Cmp = ICONS[name];
  return Cmp ? <Cmp {...props} /> : null;
}
